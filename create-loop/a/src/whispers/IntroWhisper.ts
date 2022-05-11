import { whisper } from '@oliveai/ldk';
import { stripIndent } from 'common-tags';

interface Props {
  newMessage: string;
  numClones: number;
  label: string;
}
/**
 * Preferred method for updateable whispers
 * + Class instances allow more control over updateable props
 * + Updating whispers requires storing the created whisper object
 * + Separation of concern for different methods
 * + Testing makes more sense without explicit exports solely for testing
 * - Considered overkill for any whispers that don't need updating
 * @see IntroWhisperSimple for simple whispers
 */
export default class IntroWhisper {
  whisper: whisper.Whisper | undefined;

  label: string;

  props: Props;

  constructor() {
    this.whisper = undefined;
    this.label = 'Intro Whisper';
    this.props = {
      newMessage: '',
      numClones: 1,
      label: '',
    };
  }

  createComponents() {
    const divider: whisper.Divider = {
      type: whisper.WhisperComponentType.Divider,
    };

    // Intro message.
    const introMessage: whisper.Message = {
      type: whisper.WhisperComponentType.Message,
      body: 'These are some components you can use in whispers.',
      style: whisper.Urgency.Success,
    };

    // Collapse box.
    const collapsibleContent: whisper.Markdown = {
      type: whisper.WhisperComponentType.Markdown,
      body: stripIndent`
      # Collapsible Section
      Content you put here can be expanded/collapsed.
      `,
    };
    const collapseBox: whisper.CollapseBox = {
      type: whisper.WhisperComponentType.CollapseBox,
      children: [collapsibleContent],
      open: true,
    };

    // Box example.
    const boxHeader: whisper.Markdown = {
      type: whisper.WhisperComponentType.Markdown,
      body: '# Box with Child Components',
    };
    const firstButton: whisper.Button = {
      type: whisper.WhisperComponentType.Button,
      label: 'Button 1',
      onClick: () => {
        console.log('Button 1 clicked.');
      },
    };
    const secondButton: whisper.Button = {
      type: whisper.WhisperComponentType.Button,
      label: 'Button 2',
      onClick: () => {
        console.log('Button 2 clicked.');
      },
    };
    const box: whisper.Box = {
      type: whisper.WhisperComponentType.Box,
      children: [firstButton, secondButton],
      direction: whisper.Direction.Horizontal,
      justifyContent: whisper.JustifyContent.SpaceEvenly,
    };

    // Various example components.
    const exampleComponentsHeading: whisper.Markdown = {
      type: whisper.WhisperComponentType.Markdown,
      body: '# Example Components',
    };
    const textInput: whisper.TextInput = {
      type: whisper.WhisperComponentType.TextInput,
      label: 'Text Input',
      onChange: (_error: Error | undefined, val: string) => {
        console.log('Text changed: ', val);
      },
    };
    const email: whisper.Email = {
      type: whisper.WhisperComponentType.Email,
      label: 'Email',
      onChange: (_error: Error | undefined, val: string) => {
        console.log('Email changed: ', val);
      },
    };
    const password: whisper.Password = {
      type: whisper.WhisperComponentType.Password,
      label: 'Password',
      onChange: (_error: Error | undefined, val: string) => {
        console.log('Password changed: ', val);
      },
    };
    const telephone: whisper.Telephone = {
      type: whisper.WhisperComponentType.Telephone,
      label: 'Telephone Number',
      onChange: (_error: Error | undefined, val: string) => {
        console.log('Telephone number changed: ', val);
      },
    };
    const button: whisper.Button = {
      type: whisper.WhisperComponentType.Button,
      label: 'Button',
      onClick: () => {
        console.log('Button clicked.');
      },
    };
    const link: whisper.Link = {
      type: whisper.WhisperComponentType.Link,
      text: 'Example of a link',
      onClick: () => {
        console.log('Link clicked.');
      },
    };
    const checkbox: whisper.Checkbox = {
      type: whisper.WhisperComponentType.Checkbox,
      label: 'Checkbox',
      tooltip: "Here's a tooltip.",
      value: false,
      onChange: (_error: Error | undefined, val: boolean) => {
        console.log('Checkbox clicked: ', val);
      },
    };
    const pair: whisper.ListPair = {
      type: whisper.WhisperComponentType.ListPair,
      copyable: true,
      label: 'List pair example:',
      value: 'This value is copyable.',
      style: whisper.Urgency.None,
    };
    const numberInput: whisper.NumberInput = {
      type: whisper.WhisperComponentType.Number,
      value: 6,
      max: 10,
      min: 1,
      step: 2,
      tooltip: 'Number Input',
      label: 'Number Input',
      onChange: (_error: Error | undefined, val: number) => {
        console.log('Number changed: ', val);
      },
    };
    const select: whisper.Select = {
      type: whisper.WhisperComponentType.Select,
      label: 'Select Box',
      options: ['One', 'Two', 'Three'],
      selected: 0,
      onSelect: (_error: Error | undefined, val: number) => {
        console.log('Selected: ', val);
      },
    };
    const radioBtn: whisper.RadioGroup = {
      type: whisper.WhisperComponentType.RadioGroup,
      options: ['Option 1', 'Option 2', 'Option 3'],
      onSelect: (_error: Error | undefined, val: number) => {
        console.log('Radio button option selected: ', val);
      },
    };
        const autocompleteOptions = [
      { label: 'Value 1', value: '1' },
      { label: 'Value 2', value: '2' },
      { label: 'Value 3', value: '3' },
      { label: 'Value 4', value: '4' },
      { label: 'Value 5', value: '5' },
    ];
    const autocompleteSingleSelect: whisper.Autocomplete = {
      type: whisper.WhisperComponentType.Autocomplete,
      label: 'Single Select Autocomplete',
      loading: false,
      onChange: (_error, val) => {
        console.log('Autocomplete section changed: ', val);
      },
      onSelect: (error, value, onSelectWhisper) => {
        console.log(`Received selected value: ${JSON.stringify(value)}`);
      },
      options: autocompleteOptions,
    };
    const autocompleteMultipleSelect: whisper.Autocomplete = {
      type: whisper.WhisperComponentType.Autocomplete,
      label: 'Multi Select Autocomplete',
      loading: true,
      multiple: true,
      onSelect: (error, value, onSelectWhisper) => {
        console.log(`Received selected value: ${JSON.stringify(value)}`);
      },
      options: autocompleteOptions,
      tooltip: 'tooltip',
      value: '5',
    };
    const dateTimeInput: whisper.DateTimeInput= {
      type: whisper.WhisperComponentType.DateTimeInput,
      dateTimeType: whisper.DateTimeType.Date,
      tooltip: 'Date',
      onChange: (_error: Error | undefined, val: string) => {
        console.log(`Time picker value received: `, val);
      },
    };
    // dropzone example components.
    const dropZone: whisper.DropZone = {
      type: whisper.WhisperComponentType.DropZone,
      onDrop: () => {
        console.log('file deropped')
      },
      label: 'File Components',
    };
    const icon: whisper.Icon = {
      type: whisper.WhisperComponentType.Icon,
      name: 'emoji_emotions',
      onClick: () => {
        console.log('Emoji Emotions Clicked');
      },
    };
    const sectionTitle: whisper.SectionTitle = {
      body: 'section Title in center',
      type: whisper.WhisperComponentType.SectionTitle,
    };
    const breadcrumbs: whisper.Breadcrumbs ={
      type: whisper.WhisperComponentType.Breadcrumbs,
      links: [
        {
          type: whisper.WhisperComponentType.Link,
          text: 'Breadcrumb 1',
        },
        {
          type: whisper.WhisperComponentType.Link,
          text: 'Breadcrumb 2',
        },
        {
          type: whisper.WhisperComponentType.Link,
          text: 'Breadcrumb 3',
        },
      ],
    };
    const progress: whisper.Progress = {        
      type: whisper.WhisperComponentType.Progress,
      determinate: 30,
    };

    // Showing how to use whisper.update
    const updatableComponentsHeading: whisper.Markdown = {
      type: whisper.WhisperComponentType.Markdown,
      body: '# Updatable Whisper Components',
    };
    const updatableMessage: whisper.Message = {
      type: whisper.WhisperComponentType.Message,
      header: 'This is a component hooked up to Updatable Whisper logic',
      body: this.props.newMessage || 'Type in the field below to update this line of text',
      style: whisper.Urgency.Success,
    };
    const updatableMessageInput: whisper.TextInput = {
      type: whisper.WhisperComponentType.TextInput,
      label: 'New Text Input',
      onChange: (_error: Error | undefined, val: string) => {
        console.log('Updating message text: ', val);
        this.update({ newMessage: val });
      },
    };
    const updatableLabelInput: whisper.TextInput = {
      type: whisper.WhisperComponentType.TextInput,
      label: 'Change Whisper Label',
      onChange: (_error: Error | undefined, val: string) => {
        console.log('Updating whisper label: ', val);
        this.update({ label: val });
      },
    };
    const resetButton: whisper.Button = {
      type: whisper.WhisperComponentType.Button,
      label: 'Reset Clones',
      size: whisper.ButtonSize.Large,
      buttonStyle: whisper.ButtonStyle.Secondary,
      onClick: () => {
        const numClones = 1;
        console.log('Resetting number of clones: ', numClones);
        this.update({ numClones });
      },
    };
    const clonedComponents: whisper.ChildComponents[] = [];
    for (let i = this.props.numClones; i > 0; i -= 1) {
      const clone: whisper.Button = {
        type: whisper.WhisperComponentType.Button,
        label: 'Clone Me',
        onClick: () => {
          const numClones = this.props.numClones + 1;
          console.log('Adding another clone: ', numClones);
          this.update({ numClones });
        },
      };
      clonedComponents.push(clone);
    }

    return [
      introMessage, // 0
      divider, // 1
      collapseBox, // 2
      divider, // 3
      boxHeader, // 4
      box, // 5
      divider, // 6
      exampleComponentsHeading, // 7
      textInput, // 8
      email, // 9
      password, // 10
      telephone, // 11
      button, // 12
      link, // 13
      checkbox, // 14
      pair, // 15
      numberInput, // 16
      select, // 17
      radioBtn, // 18
      autocompleteSingleSelect, // 19
      autocompleteMultipleSelect, // 20
      dateTimeInput, // 21
      dropZone, // 22
      icon, // 23
      sectionTitle, // 24
      breadcrumbs, // 25
      progress, // 26
      divider, // 27
      updatableComponentsHeading, // 28
      updatableMessage, // 29
      updatableMessageInput, // 30
      updatableLabelInput, // 31
      resetButton, // 32
      ...clonedComponents, // 33+
    ];
  }

  show() {
    whisper
      .create({
        components: this.createComponents(),
        label: this.label,
        onClose: IntroWhisper.onClose,
      })
      .then((newWhisper) => {
        this.whisper = newWhisper;
      });
  }

  update(props: Partial<Props>) {
    this.props = { ...this.props, ...props };
    this.whisper?.update({
      label: this.props.label || this.label,
      components: this.createComponents(),
    });
  }

  close() {
    this.whisper?.close(IntroWhisper.onClose);
  }

  static onClose(err?: Error) {
    if (err) {
      console.error('There was an error closing Intro whisper', err);
    }
    console.log('Intro whisper closed');
  }
}
