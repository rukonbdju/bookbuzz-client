import { Fieldset, Label, Textarea, Field, Input } from "@headlessui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { Toaster } from "react-hot-toast"
import { useParams } from "react-router-dom"

const EditBook = () => {
    const [loading,setLoading]=useState(false)
    const [book, setBook] = useState({})
    const { id } = useParams()

    //get book by _id
    useEffect(() => {
        axios.get(`http://localhost:3000/api/books/${id}`)
            .then(res => setBook(res.data))
            .catch(err => console.log(err))
    }, [id])

    //Edit book in database
    const handleEditBook = async () => {
        setLoading(true)
        const { _id, ...bookInfo } = book
        const response = await axios.post(`http://localhost:3000/api/books/${id}`, bookInfo)
        setLoading(false)
        const { acknowledged, matchedCount, modifiedCount, upsertedCount, upsertedId } = response

    }

    //handle books information
    const handleChange = (e) => {
        const { name: inputName, value } = e.target;
        setBook((prevData) => ({
            ...prevData, [inputName]: value
        }))
    }

    //handle author information
    const handleChangeAuthorInfo = (e) => {
        const { name: inputName, value } = e.target;
        setBook((prevData) => ({
            ...prevData, author: {
                ...prevData.author, [inputName]: value
            }
        }))
    }

    return (
        <div className=" max-w-xl mx-auto my-12 bg-blue-200 p-5 rounded-md">
            <Fieldset className="space-y-6 rounded-xl">
                <h1 className="text-2xl mb-5 text-center">Book Information</h1>
                <Field>
                    <Label className="">Title</Label>
                    <Input onChange={handleChange} value={book?.title} name="title"
                        className="p-2 border-2 w-full rounded"
                    />
                    <Label className="text-sm/6 font-medium ">Summary</Label>
                    <Textarea onChange={handleChange} value={book?.summary} name="summary"
                        className=" w-full border-2"
                        rows={3}
                    />

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <Label className="">ISBN</Label>
                            <Input onChange={handleChange} value={book?.ISBN} name="ISBN"
                                className="p-2 border-2 w-full rounded"
                            />
                        </div>

                        <div>
                            <Label className="">Language</Label>
                            <Input onChange={handleChange} value={book?.language} name="language"
                                className="p-2 border-2 w-full rounded"
                            />
                        </div>
                    </div>

                    <Label className="">Photo URL</Label>
                    <Input onChange={handleChange} value={book?.photo_URL} name="photo_URL"
                        className="p-2 border-2 w-full rounded"
                    />

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <Label className="">Page number</Label>
                            <Input onChange={handleChange} value={book?.pages} name="pages"
                                className="p-2 border-2 w-full rounded"
                                type="number"
                            />
                        </div>
                        <div>
                            <Label className="">Rating</Label>
                            <Input onChange={handleChange} value={book?.rating} name="rating" type="number" max={5}
                                className="p-2 border-2 w-full rounded"
                            />
                        </div>
                    </div>

                </Field>
                <Field>
                    <Label className="">Author Name</Label>
                    <Input onChange={handleChangeAuthorInfo} value={book?.author?.name} name="name"
                        className="p-2 border-2 w-full rounded"
                    />
                    <Label className="">Author Photo URL</Label>
                    <Input onChange={handleChangeAuthorInfo} value={book?.author?.photo_URL} name="photo_URL"
                        className="p-2 border-2 w-full rounded"
                    />
                    <button onClick={handleEditBook} className="p-2 border-2 w-full rounded btn bg-blue-300 mt-4">Edit Book{loading&&<span className="loading loading-spinner loading-md"></span>}</button>
                    <Toaster toastOptions={
                        { className: "p-2 rounded-md bg-green-300" }
                    }></Toaster>
                </Field>
            </Fieldset>
        </div>
    )
}
export default EditBook