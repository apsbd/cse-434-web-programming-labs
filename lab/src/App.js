import React from 'react';
import UserCard from './UserCard';

function App() {
    return (
        <div
            style={{
                display: 'flex',
                gap: 20,
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>
            <UserCard
                name='Mohiuddin'
                bio='Aspiring App Developer and React Teacher'
                img='https://i.pravatar.cc/150?img=3'
            />

            <UserCard
                name='Jonh Doe'
                bio='Aspiring App Designer'
                img='https://i.pravatar.cc/150?img=2'
            />

            <UserCard
                name='Jane Doe'
                bio='Aspiring App Manager'
                img='https://i.pravatar.cc/150?img=1'
            />
        </div>
    );
}

export default App;
