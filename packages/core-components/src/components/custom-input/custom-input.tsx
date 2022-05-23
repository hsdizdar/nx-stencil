import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'custom-input',
  styleUrl: 'custom-input.scss',
  shadow: true,
})
export class CustomInput {
  @Prop() type: string;
  @Prop() value: string;
  @Prop() label: string;
  @Prop() validationPattern;
  @Prop() validationMessage: string;
  @Prop() isValid: boolean = true;
  @Prop() size: string;

  @Event() changed!: EventEmitter<string>;

  handleChange(event) {
    this.changed.emit(event.target.value as string);
  }

  render() {
    return (
      <div>
        <label>{this.label}</label>
        <input
          class={`${this.size} ${
            this.value && (this.isValid ? 'green-border' : 'red-border')
          }`}
          type={this.type}
          pattern={`${this.validationPattern}`}
          value={this.value}
          onInput={(event) => this.handleChange(event)}
        />
        {this.value && !this.isValid ? (
          <span>{this.validationMessage}</span>
        ) : null}
      </div>
    );
  }
}
