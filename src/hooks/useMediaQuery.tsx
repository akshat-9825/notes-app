import { useEffect, useState } from "react";

type MediaQuery = "desktop" | "smallDesktop" | "mobile" | "tablet" | "custom";

const useMediaQuery = (customQuery?: string): Record<MediaQuery, boolean> => {
  const [matches, setMatches] = useState<Record<MediaQuery, boolean>>({
    desktop: false,
    smallDesktop: false,
    mobile: false,
    tablet: false,
    custom: false,
  });

  const handleMediaQueryChange = (
    mediaQuery: MediaQuery,
    event: MediaQueryListEvent | MediaQueryList
  ) => {
    setMatches((prevMatches) => ({
      ...prevMatches,
      [mediaQuery]: event.matches,
    }));
  };

  useEffect(() => {
    const mediaQueries: Record<MediaQuery, string> = {
      desktop: "(min-width: 1024px)",
      smallDesktop: "(min-width: 844px) and (max-width: 1024px)",
      tablet: "(min-width: 480px) and (max-width: 844px)",
      mobile: "(max-width: 480px)",
      custom: customQuery || "",
    };

    const queryLists: Record<MediaQuery, MediaQueryList> = {} as Record<
      MediaQuery,
      MediaQueryList
    >;

    for (const [mediaQuery, query] of Object.entries(mediaQueries)) {
      queryLists[mediaQuery as MediaQuery] = window.matchMedia(query);
      queryLists[mediaQuery as MediaQuery].addEventListener("change", (event) =>
        handleMediaQueryChange(mediaQuery as MediaQuery, event)
      );
      handleMediaQueryChange(
        mediaQuery as MediaQuery,
        queryLists[mediaQuery as MediaQuery]
      );
    }

    return () => {
      for (const [, queryList] of Object.entries(queryLists)) {
        queryList.removeEventListener("change", (event) =>
          handleMediaQueryChange("custom", event)
        );
      }
    };
  }, [customQuery]);

  return matches;
};

export default useMediaQuery;
