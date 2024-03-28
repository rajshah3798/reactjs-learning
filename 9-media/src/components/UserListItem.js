import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { deleteUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

function UserListItem({ user }) {
    const [doDeleteUser, isDeletingUser, deletingUserError] = useThunk(deleteUser);

    const handleDeleteClick = (event) => {
        doDeleteUser(user);
    }

    const header = <>
        <Button className="mr-3" loading={isDeletingUser} onClick={handleDeleteClick}>
            <GoTrashcan />
        </Button>
        {deletingUserError && <div>Error deleting user.</div>}
        {user.name}
    </>

    return (
        <ExpandablePanel header={header}>
            <AlbumsList user={user} />
        </ExpandablePanel>
    )
}

export default UserListItem