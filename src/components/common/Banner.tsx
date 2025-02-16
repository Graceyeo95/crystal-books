const Banner = () => {
  return (
    <div className='bg-[url(/images/library.jpg)] bg-cover bg-no-repeat bg-center w-full border-black h-[60vh] text-white text-center flex flex-col items-center justify-center'>
      <h1 className='headingText mb-3'>
        <span>
          <strong>함께</strong> 읽고 나누는
        </span>
        <br />
        <span>
          <strong>독후</strong> 활동
        </span>
      </h1>

      <h2 className='bodyText'>
        <span>독서 커뮤니티 책장에서 다독러들과 함께 책에 관해</span>
        <br />
        <span>이야기하며 독후 활동을 해보세요</span>
      </h2>
    </div>
  );
};

export default Banner;
