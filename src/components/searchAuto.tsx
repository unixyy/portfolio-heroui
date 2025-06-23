import { Autocomplete, AutocompleteItem, Kbd } from "@heroui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { siteConfig } from "@/config/site";

export default function SearchAuto() {
  let navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL (e.g., /page#myId)
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 100;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  const handleSelectionChange = (key: React.Key | null) => {
    if (!key) return;
    const item = siteConfig.navItems.find((_, idx) => idx.toString() === key);

    if (item && item.href) {
      const id = item.href.replace(/^#/, "");
      const el = document.getElementById(id);

      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 100;

        window.scrollTo({ top: y, behavior: "smooth" });
      } else {
        navigate(item.page + item.href || "/");
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        const input = document.querySelector<HTMLInputElement>(
          'input[aria-label="Naviguer..."]',
        );

        input?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Autocomplete
        className="max-w-xs"
        endContent={<Kbd keys={["command"]}>K</Kbd>}
        label="Naviguer..."
        size="sm"
        onSelectionChange={handleSelectionChange}
      >
        {siteConfig.navItems.map((item, idx) => (
          <AutocompleteItem key={idx}>{item.label}</AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
}
