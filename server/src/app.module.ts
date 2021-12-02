import {Module} from "@nestjs/common"
import {MongooseModule} from "@nestjs/mongoose"
import {ServeStaticModule} from "@nestjs/serve-static"
import * as path from "path"

import {TrackModule} from "./track/track.module"
import { FileModule } from "./file/file.module"

@Module({
    imports: [
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static'),}),
        MongooseModule.forRoot('mongodb+srv://tiSai:1234@messengercluster.np9w9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
        TrackModule,
        FileModule
    ]
})
export class AppModule {

}