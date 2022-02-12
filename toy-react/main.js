import { createElement, Component, render } from "./toy-react1";

class MyComponent extends Component {
  render() {
    return (
      <div id="1" class="eee">
        MyComponent
        <h1>111</h1>
        <div>222</div>
        {this.children}
      </div>
    );
  }
}

window.a = (
  <MyComponent id="1" class="eee">
    <div>11</div>
    <div>22</div>
  </MyComponent>
);

render(
  <MyComponent id="1" class="eee">
    <div>33</div>
    <div>44</div>
  </MyComponent>,
  document.body
);
