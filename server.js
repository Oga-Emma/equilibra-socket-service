const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connect', () => {
    console.log('connected');
})

emitTopicChange = (payload) => {
    io.emit('topic-changed', payload)
}
emitNewComment = (payload) => {
    io.emit('comment', payload)
}
emitAccountSuspended = (payload) => {
    io.emit('account-suspended', payload)
}
emitJoinRoom = (payload) => {
    io.emit('join-room', payload)
}
emitLeaveRoom = (payload) => {
    io.emit('leave-room', payload)
}

emitTopicChangeVote = (payload) => {
    io.emit('vote-topic-change', payload)
}

emitTopicChangeVoteEnd = (payload) => {
    io.emit('vote-topic-closed', payload)
}

emitDiscussionVote = (payload) => {
    io.emit('topic-discussion-vote', payload)
}

emitDiscussionVoteEnd = (payload) => {
    io.emit('close-discussion-vote', payload)
}

vote = (payload) => {
    io.emit('new-vote', payload)
}

refreshAccount = (payload) => {
    io.emit('refresh-account', payload)
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    const socket = require('socket.io-client')('https://api.equilibra-admin.test.natterbase.com/');

    socket.on('connect', function () {
        console.log('Connected external');
    });

    socket.on('topic-changed', (payload) => {
        emitTopicChange(payload);
    });
    socket.on('comment', (payload) => {
        emitNewComment(payload);
    });
    socket.on('account-suspended', (payload) => {
        emitAccountSuspended(payload);
    });
    socket.on('join-room', (payload) => {
        emitJoinRoom(payload)
    });
    socket.on('leave-room', (payload) => {
        emitLeaveRoom(payload);
    });
    socket.on('vote-topic-change', (payload) => {
        emitTopicChangeVote(payload);
    });
    socket.on('vote-topic-closed', (payload) => {
        emitTopicChangeVoteEnd(payload);
    });
    socket.on('topic-discussion-vote', (payload) => {
        emitDiscussionVote(payload);
    });
    socket.on('close-discussion-vote', (payload) => {
        emitDiscussionVoteEnd(payload)
    });
    socket.on('new-vote', (payload) => {
        vote(payload);
    });
    socket.on('refresh-account', (payload) => {
        refreshAccount(payload)
    });

    socket.on('disconnect', function () {
        console.log('Disconnected');
    });
    
    console.log('Server started')
});