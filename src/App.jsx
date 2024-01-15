import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [chooseTopic, setChooseTopic] = useState(false);

  let tabContent = <p>Please select a topic</p>;

  if (chooseTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[chooseTopic].title}</h3>
        <p>{EXAMPLES[chooseTopic].description}</p>
        <pre>
          <code>{EXAMPLES[chooseTopic].code}</code>
        </pre>
      </div>
    );
  }

  function handleSelect(selectedBtn) {
    const toLower = selectedBtn.toLowerCase().trim("");
    setChooseTopic(toLower);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* {CORE_CONCEPTS.map((item, i) => {
              return (
                <CoreConcept
                  key={i}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              );
            })} */}

            {CORE_CONCEPTS.map((item, index) => {
              return <CoreConcept key={index} {...item} />;
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onSelect={() => handleSelect("Components")}
              btnName="Components"
              isSelected={chooseTopic === "components"}
            />
            <TabButton
              onSelect={() => handleSelect("JSX")}
              btnName="JSX"
              isSelected={chooseTopic === "jsx"}
            />
            <TabButton
              onSelect={() => handleSelect("Props")}
              btnName="Props"
              isSelected={chooseTopic === "props"}
            />
            <TabButton
              onSelect={() => handleSelect("State")}
              btnName="State"
              isSelected={chooseTopic === "state"}
            />
          </menu>
        </section>
        {tabContent}
      </main>
    </div>
  );
}

export default App;
