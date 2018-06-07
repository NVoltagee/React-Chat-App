import React from "react";
import Chatkit from "@pusher/chatkit";

class ChatScreen extends React.Component {
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: "v1:us1:6d9a326a-188f-46de-a497-785d16179cba",
      userId: this.props.currentUsername,
      tokenProvider: new Chatkit.TokenProvider({
        url: "http://localhost:3001/authenticate"
      })
    });

    chatManager
      .connect()
      .then(currentUser => console.log("currentUser", currentUser))
      .catch(error => console.error(error));
  }
  render() {
    return (
      <div>
        <h1>Chat</h1>
      </div>
    );
  }
}

export default ChatScreen;
