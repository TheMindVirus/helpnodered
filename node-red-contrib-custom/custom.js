module.exports = (RED) =>
{
    var CustomNode = function(config)
    {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on("input", (msg) =>
        {
            console.log(typeof(msg.payload)); //number?
            try { msg.payload = msg.payload.toLowerCase(); }
            catch { msg.payload = String(msg.payload).toLowerCase(); }
            console.log(parseFloat(String(msg.payload).toLowerCase()));
            console.log(typeof(msg.payload)); //string?
            node.send(msg);
        });
    };
    RED.nodes.registerType("custom", CustomNode);
}

//For additional functionality the WebSockets API is available
//https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API