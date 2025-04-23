function UserCard({ name, bio, img }) {
    return (
        <div
            style={{
                border: '1px solid #ddd',
                padding: 20,
                width: 250
            }}>
            <img
                src={img}
                alt={name}
                style={{ width: '100%', borderRadius: '8px' }}
            />
            <h2>{name}</h2>
            <p>{bio}</p>
        </div>
    );
}

export default UserCard;
