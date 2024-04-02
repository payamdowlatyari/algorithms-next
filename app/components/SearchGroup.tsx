import { Input } from "@nextui-org/react";

export default function SearchGroup ({placeholder, onChangeHandler}: any) {

        return (
            <div>
                <Input 
                    type='search' 
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                    size="sm"
                />
            </div>
        );
}

