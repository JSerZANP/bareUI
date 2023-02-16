import "./App.css";
import Popover from "./components/Popover";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
