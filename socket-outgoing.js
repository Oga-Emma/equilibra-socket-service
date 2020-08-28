const {io} = require( './app');

module.exports.emitTopicChange = (payload) => {
    io.emit('topic-changed', payload)
}
module.exports.emitNewComment = (payload) => {
    io.emit('comment', payload)
}
module.exports.emitAccountSuspended = (payload) => {
    io.emit('account-suspended', payload)
}
module.exports.emitJoinRoom = (payload) => {
    io.emit('join-room', payload)
}
module.exports.emitLeaveRoom = (payload) => {
    io.emit('leave-room', payload)
}

module.exports.emitTopicChangeVote = (payload) => {
    io.emit('vote-topic-change', payload)
}

module.exports.emitTopicChangeVoteEnd = (payload) => {
    io.emit('vote-topic-closed', payload)
}

module.exports.emitDiscussionVote = (payload) => {
    io.emit('topic-discussion-vote', payload)
}

module.exports.emitDiscussionVoteEnd = (payload) => {
    io.emit('close-discussion-vote', payload)
}

module.exports.vote = (payload) => {
    io.emit('new-vote', payload)
}

module.exports.refreshAccount = (payload) => {
    io.emit('refresh-account', payload)
}
