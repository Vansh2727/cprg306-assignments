import Link from "next/link";

const StudentInfo = () => {
  const yourName = "Vansh Malhotra";
  const githubUsername = "Vansh2727";

  return (
    <div>
      <p>{yourName}</p>
      <Link href="https://github.com/Vansh2727/cprg306-assignments">
        Link to GitHub Repository
      </Link>
    </div>
  );
};

export default StudentInfo;
