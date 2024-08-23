export default function TopSearch() {
  return (
    <div className="
      bg-lightprim
      bg-[url('/search_icon.svg')]
      bg-no-repeat
      bg-[length:24px]
      bg-right
      rounded-3xl
      basis-2/5
      pr-4
      pt-4
      pb-4
      pl-4
      box-content
      bg-origin-content
    ">
      <input
        type="text"
        placeholder="محصول,برند یا دسته مورد نظر را جست و جو کنید"
        className="
          bg-transparent
          placeholder:text-blue
          w-full
          outline-none
          mr-10
        "
      />
    </div>
  )
}
