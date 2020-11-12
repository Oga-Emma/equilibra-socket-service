const outgoing = require('./socket-outgoing')
const socket = require('socket.io-client')('https://api.theequilibra.com/users-api');

socket.on('connect', function () {
    console.log('Connected external');
});

socket.on('topic-changed', (payload) => {
    console.log(payload);
    outgoing.emitTopicChange(payload);
});
socket.on('comment', (payload) => {
    console.log(payload);
    outgoing.emitNewComment(payload);
});
socket.on('account-suspended', (payload) => {
    console.log(payload);
    outgoing.emitAccountSuspended(payload);
});
socket.on('join-room', (payload) => {
    console.log(payload);
    outgoing.emitJoinRoom(payload)
});
socket.on('leave-room', (payload) => {
    console.log(payload);
    outgoing.emitLeaveRoom(payload);
});
socket.on('vote-topic-change', (payload) => {
    console.log(payload);
    outgoing.emitTopicChangeVote(payload);
});
socket.on('vote-topic-closed', (payload) => {
    console.log(payload);
    outgoing.emitTopicChangeVoteEnd(payload);
});
socket.on('topic-discussion-vote', (payload) => {
    console.log(payload);
    outgoing.emitDiscussionVote(payload);
});
socket.on('close-discussion-vote', (payload) => {
    console.log(payload);
    outgoing.emitDiscussionVoteEnd(payload)
});
socket.on('new-vote', (payload) => {
    console.log(payload);
    outgoing.vote(payload);
});
socket.on('refresh-account', (payload) => {
    console.log(payload);
    outgoing.refreshAccount(payload)
});

socket.on('disconnect', function () {
    console.log('Disconnected');
});
