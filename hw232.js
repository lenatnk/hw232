class Button {
  constructor(height, width, type = "button", color = "green") {
    this.height = height;
    this.width = width;
    this.type = type;
    this.color = color;
    this.props = {height: this.height, width: this.width, type: this.type, color: this.color}
  }
  onClick() {
    console.log(this.props);
  }
}

let ourButton = new Button(20, 30)

ourButton.onClick();

function testButton(button, expectedHeight, expectedWidth, expectedType, expectedColor) {
    if (
        button.height === expectedHeight &&
        button.width === expectedWidth &&
        button.type === expectedType &&
        button.color === expectedColor
    ) {
        console.log("Button was created correctly")
    } else {
        console.log("Error. Button isnt correct")
    }
}

testButton(ourButton, 20, 30, "button", "green")
testButton(ourButton, 30, 40, "table", "color")