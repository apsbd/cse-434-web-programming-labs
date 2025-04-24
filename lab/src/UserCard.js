import React, { useState } from 'react';

function UserCard({ name, bio, img }) {
    const [isFollowing, setIsFollowing] = useState(false);

    return (
        <div
            style={{
                border: '1px solid #ddd',
                padding: 20,
                width: 250,
                minHeight: 500
            }}>
            <img
                src={img}
                alt={name}
                style={{ width: '100%', borderRadius: '8px' }}
            />
            <h2>{name}</h2>
            <p>{bio}</p>
            <button
                onClick={() => setIsFollowing(!isFollowing)}
                style={{ marginTop: '10px' }}>
                {isFollowing ? 'Unfollow' : 'Follow'}
            </button>
            {isFollowing && (
                <p style={{ color: 'green' }}>You are following this user.</p>
            )}
        </div>
    );
}

export default UserCard;
