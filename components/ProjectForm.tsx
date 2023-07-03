"use client"

import { SessionInterface } from "@/common.types"
import Image from "next/image"
import { ChangeEvent } from "react"
import FormField from "./FormField"

type Props = {
    type: string,
    session: SessionInterface
}


function ProjectForm({type, session}: Props) {
    const handleSubmit = (e: React.FormEvent) => {}
    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {}

    const handleStateChange = (fieldName: string, value: string) => {

    }
  
    const form = {
        image: '',
        title: ''
    }
    return (
    <form
        onSubmit={handleSubmit}
        className="flextart form"
    >
        <div className="flexStart form_image-container">
            <label htmlFor="poster" className="flexCenter form_image-label">
                {!form.image && 'Choose a poster for your project'}
            </label>
            <input
                id="image"
                type="file"
                accept="image/*"
               required={type === 'create'}
               className="form_image-input"
               onChange={handleChangeImage}
            />
            {form.image && (
                <Image
                    src={form?.image}
                    className="sm:p-10 object-contain z-20"
                    alt='Project Poster'
                    fill
                />
            ) }
        </div>

        <FormField
            title='Title'
            state={form.title}
            placeholder="Flexibble"
            setState={(value) => handleStateChange('title', value)}
        />
    </form>
  )
}

export default ProjectForm