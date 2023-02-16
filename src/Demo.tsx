import Popover from "./components/Popover";
import { Tab, TabList, TabPanel, Tabs } from "./components/Tab";

function App() {
  return (
    <div>
      <h1>Components Demo page</h1>
      <h2>Popover</h2>
      <Popover preferredPosition="bottom-center">
        <Popover.Trigger>
          <button>show popover</button>
        </Popover.Trigger>
        <Popover.Content>
          <input type="text" />
          <Popover.Close>
            <button>close</button>
          </Popover.Close>

          <Popover preferredPosition="bottom-center">
            <Popover.Trigger>
              <button>show popover</button>
            </Popover.Trigger>
            <Popover.Content>
              <input type="text" />
              <Popover.Close>
                <button>close</button>
              </Popover.Close>
            </Popover.Content>
          </Popover>
        </Popover.Content>
      </Popover>

      <Popover preferredPosition="bottom-center">
        <Popover.Trigger>
          <button>show popover</button>
        </Popover.Trigger>
        <Popover.Content>
          <input type="text" />
          <Popover.Close>
            <button>close</button>
          </Popover.Close>
        </Popover.Content>
      </Popover>

      <hr />
      <h2>Tab</h2>
      <Tabs defaultSelectedTab="tab2">
        <TabList aria-label="jser tabs">
          <Tab tab="tab1">tab 1</Tab>
          <Tab tab="tab2">tab 2</Tab>
          <Tab tab="tab3">tab 3</Tab>
        </TabList>
        <TabPanel tab="tab1">content for tab 1</TabPanel>
        <TabPanel tab="tab2">content for tab 2</TabPanel>
        <TabPanel tab="tab3">content for tab 3</TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
