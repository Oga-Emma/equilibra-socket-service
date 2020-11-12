const {io} = require( './app');

module.exports.emitTopicChange = (payload) => {
    console.log(`emitting ${payload}`);
    io.emit('topic-changed', payload)
}
module.exports.emitNewComment = (payload) => {
    console.log(`emitting ${payload}`);
    io.emit('comment', payload)
}
module.exports.emitAccountSuspended = (payload) => {
    console.log(`emitting ${payload}`);
    io.emit('account-suspended', payload)
}
module.exports.emitJoinRoom = (payload) => {
    console.log(`emitting ${payload}`);
    io.emit('join-room', payload)
}
module.exports.emitLeaveRoom = (payload) => {
    console.log(`emitting ${payload}`);
    io.emit('leave-room', payload)
}

module.exports.emitTopicChangeVote = (payload) => {
    console.log(`emitting ${payload}`);
    io.emit('vote-topic-change', payload)
}

module.exports.emitTopicChangeVoteEnd = (payload) => {
    console.log(`emitting ${payload}`);
    io.emit('vote-topic-closed', payload)
}

module.exports.emitDiscussionVote = (payload) => {
    console.log(`emitting ${payload}`);
    io.emit('topic-discussion-vote', payload)
}

module.exports.emitDiscussionVoteEnd = (payload) => {
    console.log(`emitting ${payload}`);
    io.emit('close-discussion-vote', payload)
}

module.exports.vote = (payload) => {
    console.log(`emitting ${payload}`);
    io.emit('new-vote', payload)
}

module.exports.refreshAccount = (payload) => {
    console.log(`emitting ${payload}`);
    io.emit('refresh-account', payload)
}
