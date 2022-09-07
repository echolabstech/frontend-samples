import { html, TemplateResult } from 'lit';
import '../src/cnh-dealerportal.js';

export default {
  title: 'CnhDealerportal',
  component: 'cnh-dealerportal',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <cnh-dealerportal style="--cnh-dealerportal-background-color: ${backgroundColor}" .title=${title}></cnh-dealerportal>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
