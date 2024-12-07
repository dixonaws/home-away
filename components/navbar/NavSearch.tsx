import {Input} from '@/components/ui/input';

function NavSearch() {
    return (
        <Input type='text' placeholder='Search for a property...' className='border-b border-gray-200 max-w-xs darkbg-muted'/>
    )
}

export default NavSearch;