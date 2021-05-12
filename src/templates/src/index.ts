const indexTemplate = 
`import { whisper, {{ it.aptitudes.join(", ") }} } from "@oliveai/ldk";
import { Urgency, WhisperComponentType } from "@oliveai/ldk/dist/whisper";
import "fastestsmallesttextencoderdecoder";

function createIntroWhisper() {
  const divider{{it.isTypeScript ? ': whisper.Divider' : ''}} = {
    type: WhisperComponentType.Divider,
  };

  // Intro message.
  const introMessage{{it.isTypeScript ? ': whisper.Message' : ''}} = {
    type: WhisperComponentType.Message,
    body: "These are some components you can use in whispers.",
    style: Urgency.Success,
  };

  // Collapse box.
  const collapsibleContent{{it.isTypeScript ? ': whisper.Markdown' : ''}} = {
    type: WhisperComponentType.Markdown,
    body:
      "# Collapsible Section\n  Content you put here can be expanded/collapsed.",
  };
  const collapseBox{{it.isTypeScript ? ': whisper.CollapseBox' : ''}} = {
    type: WhisperComponentType.CollapseBox,
    children: [collapsibleContent],
    open: true,
  };

  // Example inputs.
  const exampleInputsHeading{{it.isTypeScript ? ': whisper.Markdown' : ''}} = {
    type: WhisperComponentType.Markdown,
    body: "# Example Inputs",
  };
  const textInput{{it.isTypeScript ? ': whisper.TextInput' : ''}} = {
    type: WhisperComponentType.TextInput,
    label: "Text Input",
    onChange: (val{{it.isTypeScript ? ': string' : ''}}) => {
      console.log("Text changed.", val);
    },
  };
  const email{{it.isTypeScript ? ': whisper.Email' : ''}} = {
    type: WhisperComponentType.Email,
    label: "Email",
    onChange: (val{{it.isTypeScript ? ': string' : ''}}) => {
      console.log("Email changed: ", val);
    },
  };
  const password{{it.isTypeScript ? ': whisper.Password' : ''}} = {
    type: WhisperComponentType.Password,
    label: "Password",
    onChange: (val{{it.isTypeScript ? ': string' : ''}}) => {
      console.log("Password changed: ", val);
    },
  };
  const telephone{{it.isTypeScript ? ': whisper.Telephone' : ''}} = {
    type: WhisperComponentType.Telephone,
    label: "Telephone Number",
    onChange: (val{{it.isTypeScript ? ': string' : ''}}) => {
      console.log("Telephone number changed: ", val);
    },
  };
  const button{{it.isTypeScript ? ': whisper.Button' : ''}} = {
    type: WhisperComponentType.Button,
    label: "Button",
    onClick: () => {
      console.log("Button clicked.");
    },
  };
  const link{{it.isTypeScript ? ': whisper.Link' : ''}} = {
    type: WhisperComponentType.Link,
    text: "Example of a link",
    onClick: () => {
      console.log("Link clicked.");
    },
  };
  const checkbox{{it.isTypeScript ? ': whisper.Checkbox' : ''}} = {
    type: WhisperComponentType.Checkbox,
    label: "Checkbox",
    tooltip: "Here's a tooltip.",
    value: false,
    onChange: (value{{it.isTypeScript ? ': boolean' : ''}}) => {
      console.log("checkbox clicked: ", value);
    },
  };
  const pair{{it.isTypeScript ? ': whisper.ListPair' : ''}} = {
    type: WhisperComponentType.ListPair,
    copyable: true,
    label: "List pair example:",
    value: "This value is copyable.",
    style: whisper.Urgency.None,
  };
  const numberInput{{it.isTypeScript ? ': whisper.NumberInput' : ''}} = {
    type: WhisperComponentType.Number,
    value: 6,
    max: 10,
    min: 1,
    step: 2,
    tooltip: "Number Input",
    label: "Number Input",
    onChange: (val{{it.isTypeScript ? ': number' : ''}}) => {
      console.log("got number change", val);
    },
  };
  const select{{it.isTypeScript ? ': whisper.Select' : ''}} = {
    type: WhisperComponentType.Select,
    label: "Select Box",
    options: ["One", "Two", "Three"],
    selected: 0,
    onSelect: (val{{it.isTypeScript ? ': number' : ''}}) => {
      console.log("Selected: ", val);
    },
  };
  const radioBtn{{it.isTypeScript ? ': whisper.RadioGroup' : ''}} = {
    type: WhisperComponentType.RadioGroup,
    options: ["Option 1", "Option 2", "Option 3"],
    onSelect: (val{{it.isTypeScript ? ': number' : ''}}) => {
      console.log("Radio button option selected: ", val);
    },
  };

  whisper.create({
    components: [
      introMessage,
      divider,
      collapseBox,
      divider,
      exampleInputsHeading,
      textInput,
      email,
      password,
      telephone,
      button,
      link,
      checkbox,
      pair,
      numberInput,
      select,
      radioBtn,
    ],
    label: "Loop Started",
    onClose: () => console.log("{{it.projectName}} intro whisper was closed."),
  });
}

(async function main(){{(it.isTypeScript ? ': Promise<void>' : '') | safe}} {
  console.log("{{it.projectName}} loop started");

  createIntroWhisper();

{{ @each(it.aptitudes) => aptitude }}
{{ @if (aptitude === 'clipboard') }}
  // Example for clipboard aptitude.
  clipboard.listen(false, (text{{it.isTypeScript ? ': string' : ''}}) => {
    whisper.create({
      label: "Clipboard Aptitude Fired",
      components: [
        {
          type: WhisperComponentType.Message,
          body: text,
        }
      ],
      onClose: () => { console.log("Clipboard whisper closed"); },
    });
  });

{{ #elif (aptitude === 'ui') }}
  // Example for search aptitudes.
  const callback = (text{{it.isTypeScript ? ': string' : ''}}) => {
    whisper.create({
      label: "Search Aptitude Fired",
      components: [
        {
          type: WhisperComponentType.Message,
          body: text,
        }
      ],
      onClose: () => { console.log("Search whisper closed"); },
    });
  };

  ui.listenSearchbar(callback);
  ui.listenGlobalSearch(callback);

{{ #elif (aptitude === 'window') }}
  // Example for window aptitude.
  window.listenActiveWindow((aw) => {
    whisper.create({
      label: "Active Window Changed",
      components: [
        {
          type: WhisperComponentType.ListPair,
          copyable: true,
          label: "Window Name",
          value: aw.path,
          style: whisper.Urgency.None,
        },
        {
          type: WhisperComponentType.ListPair,
          copyable: true,
          label: "Process Id",
          value: aw.pid.toString(),
          style: whisper.Urgency.None,
        },
      ],
      onClose: () => { console.log("Window whisper closed.") }
    });
  });

{{ #elif (aptitude === 'keyboard') }}
  // Example for keyboard aptitude.
  keyboard.listenText((text{{it.isTypeScript ? ': string' : ''}}) => {
    whisper.create({
      label:  "Keyboard Aptitude Fired",
      components: [
        {
          type: WhisperComponentType.Message,
          body: text,
        }
      ],
      onClose: () => { console.log("Keyboard whisper closed"); },
    })
  });

{{ #elif (aptitude === 'network') }}
  // Example for network aptitude.
  const request{{it.isTypeScript ? ': network.HTTPRequest' : ''}} = {
    url: "https://www.thecocktaildb.com/api/json/v1/1/random.php?a=Alcoholic",
    method: "GET",
    body: new Uint8Array,
    headers: {}
  };
  const response = await network.httpRequest(request);
  const decoder = new TextDecoder("utf-8");
  const parsedBody = decoder.decode(new Uint8Array(response.data));
  whisper.create({
    label:  "Example Network Whisper",
    components: [
      {
        type: WhisperComponentType.Markdown,
        body: parsedBody
      }
    ],
    onClose: () =>{ console.log("Network whisper closed") }
  });

{{ /if }}
{{/each}}
})()`;
export default indexTemplate;
