import { Field, Fieldset, Input, Label, Select, Textarea } from "@headlessui/react"
import { useEffect, useState } from "react"
import useAuth from "../../../hooks/useAuth"
import axios from "axios"
import useFirebase from "../../../hooks/useFirebase"
import Toast from "../../Common/Toast"

const UpdateProfile = () => {
    const [userInfo, setUserInfo] = useState(null)
    const { user: { uid } } = useAuth()
    const { updateUser, isLoading, message, errorMessage } = useFirebase()

    useEffect(() => {
        axios.get(`https://bookbuzz-server.vercel.app/api/users/${uid}`)
            .then(res => setUserInfo(res.data))
            .catch(err => console.log(err))
    }, [uid])

    const handleChange = (e) => {
        const { name: inputName, value } = e.target
        console.log(inputName, value)
        setUserInfo((prevData) => ({
            ...prevData, [inputName]: value

        }
        ))
    }

    //Handle update user
    const handleUpdateProfile = () => {
        updateUser(userInfo)
    }
    return (
        <div className=" max-w-xl mx-auto my-12 bg-blue-200 p-5 rounded-md">
            <Fieldset className="space-y-6 rounded-xl">
                <h1 className="text-2xl mb-5 text-center">Profile</h1>
                <Field>
                    <Label className="">Full name</Label>
                    <Input onChange={handleChange} value={userInfo?.name} name="name"
                        className="p-2 border-2 w-full rounded"
                    />
                    <Label className="text-sm/6 font-medium ">Home Address</Label>
                    <Textarea onChange={handleChange} value={userInfo?.homeAddress} name="homeAddress"
                        className=" w-full border-2"
                        rows={2}
                    />
                    <Label className="text-sm/6 font-medium ">Work Address</Label>
                    <Textarea onChange={handleChange} value={userInfo?.workAddress} name="workAddress"
                        className=" w-full border-2"
                        rows={2}
                    />

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <Label className="">Phone</Label>
                            <Input onChange={handleChange} value={userInfo?.phone} name="phone"
                                className="p-2 border-2 w-full rounded"
                            />
                        </div>
                        <div>
                            <Label className="block">Gender</Label>
                            <div className="relative">
                                <Select
                                    name="gender"
                                    value={userInfo?.gender}
                                    className="border-2 border-blue-400 p-2 w-full rounded"
                                >
                                    <option className="py-2" value="active">Male</option>
                                    <option className="py-2" value="paused">Female</option>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <Label className="">Photo URL</Label>
                    <Input onChange={handleChange} value={userInfo?.photo_URL} name="photo_URL"
                        className="p-2 border-2 w-full rounded"
                    />

                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <Label className="">Date of Birth</Label>
                            <Input onChange={handleChange} type="date" value={userInfo?.dob} name="dob"
                                className="p-2 border-2 w-full rounded"
                            />
                        </div>
                        <div>
                            <Label className="">Occupation</Label>
                            <Input onChange={handleChange} value={userInfo?.occupation} name="occupation"
                                className="p-2 border-2 w-full rounded"
                            />
                        </div>
                    </div>

                </Field>
                <Field>
                    <button onClick={() => handleUpdateProfile()} className="p-2 border-2 w-full rounded btn bg-blue-300 mt-4">Edit Profile {isLoading && <span className="loading loading-spinner loading-md"></span>}</button>
                </Field>
            </Fieldset>
            {message && <Toast>Profile update successful !</Toast>}
        </div>
    )
}
export default UpdateProfile