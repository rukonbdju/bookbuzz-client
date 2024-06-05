const Blog = ({ blog }) => {
    const { } = blog;
    return (
        <div className=" border-2 border-dashed border-blue-700 rounded p-4">
            <h1 className="text-center text-xl">{blog.title}</h1>
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" />
                </div>
            </div>
            <div>
                <h2>Author</h2>
                <p>Name: Alice Waters</p>
                <p>UID: user001</p>
                <p>Email: <a href="mailto:alice@example.com">alice@example.com</a></p>
                <p><img src="https://example.com/photos/alice.jpg" alt="Alice Waters Photo" /></p>
            </div>
        </div>
    )
}
export default Blog