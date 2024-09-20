import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, { params }: { params: { authHandler: string[] } }) {
    console.log(params.authHandler);
    
    return NextResponse.json({
        msg: "hi there!"
    });
}
