export default function Mission({item}){

    return (
        <div> {item.mission_name} {item.launch_year}
            <img src={item.links.mission_patch_small}/>



        </div>
    );

}
