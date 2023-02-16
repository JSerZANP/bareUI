import * as React from "react";
import { useCallback, useState } from "react";

const TabsContext = React.createContext<{
  selectedTab: string | null;
  selectTab: (tab: string) => void;
  tabsPrefix: string;
}>({
  tabsPrefix: "",
  selectedTab: null,
  selectTab: (tab: string) => {
    throw new Error("should not be used without TabsContext.Provider");
  },
});

export function Tabs({
  children,
  defaultSelectedTab,
}: {
  children: React.ReactNode;
  defaultSelectedTab: string;
}) {
  const tabsPrefix = React.useMemo(() => {
    // use some unique id generator
    // return uid()
    return "tabxxx";
  }, []);
  const [selectedTab, selectTab] = useState(defaultSelectedTab);

  const contextValue = React.useMemo(
    () => ({
      selectTab,
      selectedTab,
      tabsPrefix,
    }),
    [selectedTab, selectTab]
  );

  return (
    <TabsContext.Provider value={contextValue}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabList({
  children,
  "aria-label": ariaLabel,
}: {
  children: React.ReactNode;
  "aria-label": string;
}) {
  const refList = React.useRef<HTMLDivElement>(null);

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    const list = refList.current;
    if (!list) return;
    const tabs = Array.from<HTMLElement>(
      list.querySelectorAll('[role="tab"]:not([diabled])')
    );
    const index = tabs.indexOf(document.activeElement as HTMLElement);
    if (index < 0) return;

    switch (e.key) {
      case "ArrowUp":
      case "ArrowLeft": {
        const next = (index - 1 + tabs.length) % tabs.length;
        tabs[next]?.focus();
        break;
      }
      case "ArrowDown":
      case "ArrowRight": {
        const next = (index + 1 + tabs.length) % tabs.length;
        tabs[next]?.focus();
        break;
      }
    }
  }, []);
  return (
    <div
      ref={refList}
      role="tablist"
      aria-label={ariaLabel}
      onKeyDown={onKeyDown}
    >
      {children}
    </div>
  );
}

export function Tab({
  children,
  tab,
}: {
  tab: string;
  children: React.ReactNode;
}) {
  const { selectedTab, selectTab, tabsPrefix } = React.useContext(TabsContext);

  return (
    <button
      role="tab"
      aria-selected={selectedTab === tab}
      aria-controls={`tab-${tabsPrefix}-tabpanel-${tab}`}
      onClick={() => selectTab(tab)}
      tabIndex={selectedTab === tab ? 0 : -1}
      style={{ fontWeight: selectedTab === tab ? "bold" : "normal" }}
    >
      {children}
    </button>
  );
}

export function TabPanel({
  children,
  tab,
}: {
  tab: string;
  children: React.ReactNode;
}) {
  const { selectedTab, tabsPrefix } = React.useContext(TabsContext);

  if (selectedTab !== tab) return null;

  return (
    <div role="tabpanel" tabIndex={0} id={`tab-${tabsPrefix}-tabpanel-${tab}`}>
      {children}
    </div>
  );
}
