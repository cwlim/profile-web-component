import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'profile-component',
  styleUrl: 'profile-component.css',
  shadow: true,
})
export class ProfileComponent {
  /**
   * The Account Number
   */
  @Prop() accountNumber: string;


  render() {
    return <div class="profile"><div>Hello, John</div>
    <div>Account Number: {this.accountNumber} </div></div>

  }
}
