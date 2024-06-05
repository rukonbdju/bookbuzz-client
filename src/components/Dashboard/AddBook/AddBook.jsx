import { Field, Fieldset, Input, Label, Textarea } from "@headlessui/react";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import { useState } from "react";

const AddBook = () => {
    const [isAddBook,setIsAddBook]=useState(false)
    const handleBookSubmit = async (e) => {
        e.preventDefault()
        const bookInfo = {
            title: e.target.title.value,
            author: {
                name: e.target.authorName.value,
                photo_URL: e.target.authorPhotoURL.value,
            },
            summary: e.target.summary.value,
            photo_URL: e.target.bookPhotoURL.value,
            ISBN: e.target.ISBN.value,
            pages: e.target.pages.value,
            language: e.target.language.value,
            rating: e.target.rating.value
        };
        const response = await axios.post("http://localhost:3000/api/books",bookInfo)
        if(response.data.acknowledgement){
            setIsAddBook(true)
            toast("book added Successfully !")
            e.target.reset()
        }
         console.log(response)
    }

    return (
        <form onSubmit={handleBookSubmit} className=" max-w-xl mx-auto my-12 bg-blue-200 p-5 rounded-md">
            <Fieldset className="space-y-6 rounded-xl">
                <h1 className="text-2xl mb-5 text-center">Book Information</h1>
                <Field>
                    <Label className="">Title</Label>
                    <Input name="title"
                        className="p-2 border-2 w-full rounded"
                    />
                    <Label className="text-sm/6 font-medium ">Summary</Label>
                    <Textarea name="summary"
                        className=" w-full border-2"
                        rows={3}
                    />

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <Label className="">ISBN</Label>
                            <Input name="ISBN"
                                className="p-2 border-2 w-full rounded"
                            />
                        </div>

                        <div>
                            <Label className="">Language</Label>
                            <Input name="language"
                                className="p-2 border-2 w-full rounded"
                            />
                        </div>
                    </div>

                    <Label className="">Photo URL</Label>
                    <Input name="bookPhotoURL"
                        className="p-2 border-2 w-full rounded"
                    />

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <Label className="">Page number</Label>
                            <Input name="pages"
                                className="p-2 border-2 w-full rounded"
                                type="number"
                            />
                        </div>
                        <div>
                            <Label className="">Rating</Label>
                            <Input name="rating" type="number" max={5}
                                className="p-2 border-2 w-full rounded"
                            />
                        </div>
                    </div>

                </Field>
                <Field>
                    <Label className="">Author Name</Label>
                    <Input name="authorName"
                        className="p-2 border-2 w-full rounded"
                    />
                    <Label className="">Author Photo URL</Label>
                    <Input name="authorPhotoURL"
                        className="p-2 border-2 w-full rounded"
                    />
                    <Input
                        className="p-2 border-2 w-full rounded btn bg-blue-300 mt-4"
                        type="submit"
                        value={"ADD BOOK"}
                    />
                    <Toaster toastOptions={
                        {className:"p-2 rounded-md bg-green-300"}
                    }></Toaster>
                </Field>
            </Fieldset>
        </form>
    )
}

export default AddBook