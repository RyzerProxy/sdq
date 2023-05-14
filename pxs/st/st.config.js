self.__st$config = {
	prefix: "/~sting/",
	bare: location.origin + "/bare/",
	encoding: "plain",

	get encodeUrl() {
		return Sting.encodings[this.encoding].encode;
	},
    
	get decodeUrl() {
		return Sting.encodings[this.encoding].decode;
	}
}
