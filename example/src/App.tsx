import { CodeBlock } from 'react-code-blocks';
import { Column, Container, Flex, Row } from 'grapefruit-ui';
import { SectionTitle } from './components/note';
import { Note } from './components/section-title';
import { codeBlock1, codeBlock2, codeBlock3 } from './utils';

function App() {
  return (
    <>
      <header className="hero">
        <Flex direction="column" align="center" justify="center">
          <h1>Grapefruit UI</h1>
          <p>simple, lightweight, and configurable library with layout components</p>
        </Flex>
      </header>
      <main>
        <section>
          <Container>
            <SectionTitle title="Flex" subtitle="A div that takes all flexbox properties" />
            <Flex align="center" justify="flex-end" className="flex-example">
              <div className="box">1</div>
              <div className="box">2</div>
              <div className="box">3</div>
              <div className="box">4</div>
              <div className="box">5</div>
            </Flex>
            <div className="code-block">
              <CodeBlock language="jsx" text={codeBlock1} />
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <SectionTitle title="Container" subtitle="A Component that changes the max-width accordingly to window width." />
            <Container className="box" />
          </Container>
        </section>

        <section>
          <Container>
            <SectionTitle title="Column" subtitle="A component that is grow/shrink based on breakpoint " />
            <Row>
              <Column sm={4} md={4} className="box" />
              <Column sm={7} md={4} className="box" />
              <Column sm={1} md={4} className="box" />
            </Row>
            <div className="code-block">
              <CodeBlock language="jsx" text={codeBlock2} />
            </div>
            <Row orientation="column" className="vertical-row">
              <Column sm={4} md={4} className="box" />
              <Column sm={7} md={4} className="box" />
              <Column sm={1} md={4} className="box" />
            </Row>
            <div className="code-block">
              <CodeBlock language="jsx" text={codeBlock3} />
            </div>
            <Note text="You can change '--grid-columns' via Dev Tools." />
          </Container>
        </section>
      </main>
      </>
  );
}

export default App;
