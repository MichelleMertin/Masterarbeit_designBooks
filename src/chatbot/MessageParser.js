class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (
      lowercase.includes("fantasy") ||
      lowercase.includes("krimi") ||
      lowercase.includes("liebesroman") ||
      lowercase.includes("sci-Fi") ||
      lowercase.includes("kinderbuch")
    ) {
      this.actionProvider.recommendGenre(message);
    }
  }
}

export default MessageParser;
