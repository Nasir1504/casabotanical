
//components
import CollectionsCard from "./collections-card/CollectionsCard"

import { COLLECTIONS_CARD_DATA } from "./collectionsCardData";

//styles
import "./collections.scss";


export default function Collections() {

  return (
    <div className="collections-main w-full h-auto flex flex-col justify-center items-center bg-[#232321]">
      <div className="w-full h-[150px]" />
      <div className="card-container grid lg:grid-cols-[1fr_1fr_1fr] max-lg:grid-cols-[1fr_1fr] w-[80%] justify-items-center items-start p-6 gap-x-6 gap-y-10">
        {
          COLLECTIONS_CARD_DATA.map((item, i) => {
            return <CollectionsCard
              key={i}
              Name={item.name}
              ImgURL={item.imgURL}
              LinkTo={item.linkTo}
            />
          })
        }
      </div>



    </div>
  )
}













// export default function Collections() {
//   return (
//     <div className="collections-main w-full h-[100vh] flex justify-center items-center">
//       COLLECTIONS
//     </div>
//   )
// }
