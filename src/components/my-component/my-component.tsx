import { Component, Prop, Method, State } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private count = 1;

  @State() elements: JSX.Element[] = [
    (<circle cx="10px" cy="100px" r="10px"></circle>),
  ];

  // private getText(): string {
  //   return format(this.first, this.middle, this.last);
  // }

  @Method()
  addPath() {
    this.elements = [ ...this.elements, (<rect x={this.count*20} y={this.count*20} height="10px" width="10px"></rect>)]
    this.count++;
  }

  @Method()
  addText() {
    this.elements = [ ...this.elements, (<text x="10" y="10">I'm going to break things</text>)]
  }

  render() {
    return (
      <svg width="500px" height="500px" viewbox="0 0 1000px 1000px">
        {this.elements.map(el => 
          el
        )}
      </svg>
    );
  }
}
