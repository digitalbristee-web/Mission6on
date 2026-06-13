"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function FlodeskEmbed() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const redirectedRef = useRef(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let cancelled = false;

    const redirectAfterFlodeskSuccess = () => {
      if (redirectedRef.current) return;
      redirectedRef.current = true;

      window.setTimeout(() => {
        router.push("/thanks");
      }, 1800);
    };

    const mountEmbed = async () => {
      try {
        const response = await fetch("/flodesk-embed.html", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Unable to load Flodesk embed.");
        }

        const html = await response.text();
        const container = containerRef.current;

        if (!container || cancelled) return;

        container.innerHTML = html;

        const scriptNodes = Array.from(container.querySelectorAll("script"));
        scriptNodes.forEach((scriptNode) => {
          const scriptText = scriptNode.textContent || "";
          scriptNode.remove();

          if (scriptText.trim()) {
            new Function(scriptText)();
          }
        });

        const root = container.querySelector<HTMLElement>(
          '[data-ff-el="root"]'
        );

        const isSuccess = () => {
          if (!root) return false;

          const successElement = root.querySelector<HTMLElement>(
            '[data-ff-el="success"]'
          );

          return (
            root.getAttribute("data-ff-stage") === "success" ||
            root.classList.contains("fd-has-success") ||
            Boolean(successElement?.offsetParent)
          );
        };

        const observer = new MutationObserver(() => {
          if (isSuccess()) redirectAfterFlodeskSuccess();
        });

        if (root) {
          observer.observe(root, {
            attributes: true,
            attributeFilter: ["data-ff-stage", "class", "style"],
            childList: true,
            subtree: true,
          });
        }

        const intervalId = window.setInterval(() => {
          if (isSuccess()) redirectAfterFlodeskSuccess();
        }, 500);

        cleanup = () => {
          observer.disconnect();
          window.clearInterval(intervalId);
        };
      } catch {
        if (!cancelled) setLoadError(true);
      }
    };

    mountEmbed();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [router]);

  return (
    <div className="flodesk-shell">
      <div ref={containerRef} />
      {loadError ? (
        <p className="rounded-md border border-[#f3c7c3] bg-white px-4 py-3 text-sm font-semibold text-[#b42318]">
          The form could not load. Please refresh the page and try again.
        </p>
      ) : null}
    </div>
  );
}
