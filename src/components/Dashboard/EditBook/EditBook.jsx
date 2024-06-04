import { Description, Fieldset, Label, Legend, Select, Textarea, Field, Input } from "@headlessui/react"

const EditBook = () => {
    return (
        <div className="w-full max-w-lg">
            <Fieldset className="space-y-6 rounded-xl">
                <Field>
                    <Label className="">Title</Label>
                    <Input
                        className="p-2 border-2 w-full rounded"
                    />
                    <Label className="">ISBN</Label>
                    <Input
                        className="p-2 border-2 w-full rounded"
                    />
                    <Label className="">Page number</Label>
                    <Input
                        className="p-2 border-2 w-full rounded"
                    />
                </Field>
                <Field>
                    
                </Field>
                <Field>
                    <Label className="">Author</Label>
                    <Input
                        className="p-2 border-2 w-full rounded"
                    />
                    <Label className="">Photo URL</Label>
                    <Input
                        className="p-2 border-2 w-full rounded"
                    />
                </Field>
                <Field>
                    <Label className="text-sm/6 font-medium ">Summary</Label>
                    <Textarea
                        className=" w-full border-2"
                        rows={3}
                    />
                </Field>
            </Fieldset>
        </div>
    )
}
export default EditBook