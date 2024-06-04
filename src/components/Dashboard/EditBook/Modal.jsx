import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react"
import EditBook from "./EditBook"

const Modal = ({close,isOpen}) => {
    return (
        <Transition appear show={isOpen}>
            <Dialog as="div" className="relative z-10 focus:outline-none" onClose={()=>close()}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto border-2">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <TransitionChild
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 transform-[scale(95%)]"
                            enterTo="opacity-100 transform-[scale(100%)]"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 transform-[scale(100%)]"
                            leaveTo="opacity-0 transform-[scale(95%)]"
                        >
                            <DialogPanel className="w-full max-w-md rounded-xl p-4 border-2 bg-white">
                                <DialogTitle as="h3" className="">
                                    Edit Book
                                </DialogTitle>
                                <div className="mt-2">
                                    <EditBook></EditBook>
                                </div>
                                <div className="mt-4">
                                    <Button
                                        className="inline-flex items-center gap-2 btn"
                                        onClick={()=>close()}
                                    >
                                        Got it, thanks!
                                    </Button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
export default Modal