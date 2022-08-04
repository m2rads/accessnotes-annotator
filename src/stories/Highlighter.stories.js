import React from "react";
import { storiesOf } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../component/app/store";
import Highlighter from "../component/Highlighter/Highlighter";

const stories = storiesOf("App Test", module);

// Highlighter without Annotation option
stories.add("App", () => {
  return (
    <>
      <Provider store={store}>
        <Highlighter annotator={false} localStorage={false} />
      </Provider>
      <p>
        Hello world please run my highlighter module Hello world please run my
        highlighter module Hello world please run my highlighter module Hello
        world please run my highlighter module Hello world please run my
        highlighter module Hello world please run my highlighter module Hello
        world please run my highlighter module Hello world please run my
        highlighter module Hello world please run my highlighter module
      </p>
    </>
  );
});