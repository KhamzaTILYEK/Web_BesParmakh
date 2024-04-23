const PersonDetailsCard = ({ customer }) => {
  console.log(customer);
  return (
    <div className="rounded-lg border border-default-200 p-6">
      <img
        src="https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg"

        width={96}
        height={96}
        className="w-24 h-24 rounded-full border border-gray-200 bg-gray-100 p-1 dark:border-gray-600 dark:bg-gray-700"
        alt="avatar"
      />
      <h4 className="mb-1 mt-3 text-lg">

      </h4>
      <div className="mt-6 text-start">
        <h4 className="mb-2.5 text-sm uppercase">Миний тухай :</h4>
        <p className="mb-6 text-gray-400">
          {customer?.description}
        </p>
        <p className="mb-3 text-zinc-400">
          <b>Бүтэн нэр :</b> <span className="ms-2">
            {`${customer.firstName} ${customer.lastName}`}
          </span>
        </p>
        <p className="mb-3 text-zinc-400">
          <b>Гар утас :</b>
          <span className="ms-2">
            {customer?.contact_no}
          </span>
        </p>
        <p className="mb-3 text-zinc-400">
          <b>Имэйл :</b> <span className="ms-2 ">
            {customer?.email}
          </span>
        </p>
        <p className="mb-1.5 text-zinc-400">
          <b>Байршил :</b> <span className="ms-2">
            {customer?.country}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PersonDetailsCard;
