import styled from "styled-components";
import { Users } from "../../models/users";

export const UserInfoContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-end;
	height: 5vh;
	background-color: #2c2c2c;
	color: #ffffff;
	div {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width: 30%;
		img {
			width: 1.5em;
			height: 1.5em;
			border-radius: 50%;
		}
		span {
			padding: 0 5px;
		}
	}
`;

type UserInfoProps = Omit<Users, "id">;

export default function UserInfo({ name, avatar }: UserInfoProps) {
	return (
		<UserInfoContainer>
			<div>
				<img src={avatar} alt="" />
				<span>{name}</span>
			</div>
		</UserInfoContainer>
	);
}
