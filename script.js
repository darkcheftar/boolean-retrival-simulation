let stopWords = [
    "a",
    "able",
    "about",
    "above",
    "abst",
    "accordance",
    "according",
    "accordingly",
    "across",
    "act",
    "actually",
    "added",
    "adj",
    "affected",
    "affecting",
    "affects",
    "after",
    "afterwards",
    "again",
    "against",
    "ah",
    "all",
    "almost",
    "alone",
    "along",
    "already",
    "also",
    "although",
    "always",
    "am",
    "among",
    "amongst",
    "an",
    "and",
    "announce",
    "another",
    "any",
    "anybody",
    "anyhow",
    "anymore",
    "anyone",
    "anything",
    "anyway",
    "anyways",
    "anywhere",
    "apparently",
    "approximately",
    "are",
    "aren",
    "arent",
    "arise",
    "around",
    "as",
    "aside",
    "ask",
    "asking",
    "at",
    "auth",
    "available",
    "away",
    "awfully",
    "b",
    "back",
    "be",
    "became",
    "because",
    "become",
    "becomes",
    "becoming",
    "been",
    "before",
    "beforehand",
    "begin",
    "beginning",
    "beginnings",
    "begins",
    "behind",
    "being",
    "believe",
    "below",
    "beside",
    "besides",
    "between",
    "beyond",
    "biol",
    "both",
    "brief",
    "briefly",
    "but",
    "by",
    "c",
    "ca",
    "came",
    "can",
    "cannot",
    "can't",
    "cause",
    "causes",
    "certain",
    "certainly",
    "co",
    "com",
    "come",
    "comes",
    "contain",
    "containing",
    "contains",
    "could",
    "couldnt",
    "d",
    "date",
    "did",
    "didn't",
    "different",
    "do",
    "does",
    "doesn't",
    "doing",
    "done",
    "don't",
    "down",
    "downwards",
    "due",
    "during",
    "e",
    "each",
    "ed",
    "edu",
    "effect",
    "eg",
    "eight",
    "eighty",
    "either",
    "else",
    "elsewhere",
    "end",
    "ending",
    "enough",
    "especially",
    "et",
    "et-al",
    "etc",
    "even",
    "ever",
    "every",
    "everybody",
    "everyone",
    "everything",
    "everywhere",
    "ex",
    "except",
    "f",
    "far",
    "few",
    "ff",
    "fifth",
    "first",
    "five",
    "fix",
    "followed",
    "following",
    "follows",
    "for",
    "former",
    "formerly",
    "forth",
    "found",
    "four",
    "from",
    "further",
    "furthermore",
    "g",
    "gave",
    "get",
    "gets",
    "getting",
    "give",
    "given",
    "gives",
    "giving",
    "go",
    "goes",
    "gone",
    "got",
    "gotten",
    "h",
    "had",
    "happens",
    "hardly",
    "has",
    "hasn't",
    "have",
    "haven't",
    "having",
    "he",
    "hed",
    "hence",
    "her",
    "here",
    "hereafter",
    "hereby",
    "herein",
    "heres",
    "hereupon",
    "hers",
    "herself",
    "hes",
    "hi",
    "hid",
    "him",
    "himself",
    "his",
    "hither",
    "home",
    "how",
    "howbeit",
    "however",
    "hundred",
    "i",
    "id",
    "ie",
    "if",
    "i'll",
    "im",
    "immediate",
    "immediately",
    "importance",
    "important",
    "in",
    "inc",
    "indeed",
    "index",
    "information",
    "instead",
    "into",
    "invention",
    "inward",
    "is",
    "isn't",
    "it",
    "itd",
    "it'll",
    "its",
    "itself",
    "i've",
    "j",
    "just",
    "k",
    "keep",
    "keeps",
    "kept",
    "kg",
    "km",
    "know",
    "known",
    "knows",
    "l",
    "largely",
    "last",
    "lately",
    "later",
    "latter",
    "latterly",
    "least",
    "less",
    "lest",
    "let",
    "lets",
    "like",
    "liked",
    "likely",
    "line",
    "little",
    "'ll",
    "look",
    "looking",
    "looks",
    "ltd",
    "m",
    "made",
    "mainly",
    "make",
    "makes",
    "many",
    "may",
    "maybe",
    "me",
    "mean",
    "means",
    "meantime",
    "meanwhile",
    "merely",
    "mg",
    "might",
    "million",
    "miss",
    "ml",
    "more",
    "moreover",
    "most",
    "mostly",
    "mr",
    "mrs",
    "much",
    "mug",
    "must",
    "my",
    "myself",
    "n",
    "na",
    "name",
    "namely",
    "nay",
    "nd",
    "near",
    "nearly",
    "necessarily",
    "necessary",
    "need",
    "needs",
    "neither",
    "never",
    "nevertheless",
    "new",
    "next",
    "nine",
    "ninety",
    "no",
    "nobody",
    "non",
    "none",
    "nonetheless",
    "noone",
    "nor",
    "normally",
    "nos",
    "not",
    "noted",
    "nothing",
    "now",
    "nowhere",
    "o",
    "obtain",
    "obtained",
    "obviously",
    "of",
    "off",
    "often",
    "oh",
    "ok",
    "okay",
    "old",
    "omitted",
    "on",
    "once",
    "one",
    "ones",
    "only",
    "onto",
    "or",
    "ord",
    "other",
    "others",
    "otherwise",
    "ought",
    "our",
    "ours",
    "ourselves",
    "out",
    "outside",
    "over",
    "overall",
    "owing",
    "own",
    "p",
    "page",
    "pages",
    "part",
    "particular",
    "particularly",
    "past",
    "per",
    "perhaps",
    "placed",
    "please",
    "plus",
    "poorly",
    "possible",
    "possibly",
    "potentially",
    "pp",
    "predominantly",
    "present",
    "previously",
    "primarily",
    "probably",
    "promptly",
    "proud",
    "provides",
    "put",
    "q",
    "que",
    "quickly",
    "quite",
    "qv",
    "r",
    "ran",
    "rather",
    "rd",
    "re",
    "readily",
    "really",
    "recent",
    "recently",
    "ref",
    "refs",
    "regarding",
    "regardless",
    "regards",
    "related",
    "relatively",
    "research",
    "respectively",
    "resulted",
    "resulting",
    "results",
    "right",
    "run",
    "s",
    "said",
    "same",
    "saw",
    "say",
    "saying",
    "says",
    "sec",
    "section",
    "see",
    "seeing",
    "seem",
    "seemed",
    "seeming",
    "seems",
    "seen",
    "self",
    "selves",
    "sent",
    "seven",
    "several",
    "shall",
    "she",
    "shed",
    "she'll",
    "shes",
    "should",
    "shouldn't",
    "show",
    "showed",
    "shown",
    "showns",
    "shows",
    "significant",
    "significantly",
    "similar",
    "similarly",
    "since",
    "six",
    "slightly",
    "so",
    "some",
    "somebody",
    "somehow",
    "someone",
    "somethan",
    "something",
    "sometime",
    "sometimes",
    "somewhat",
    "somewhere",
    "soon",
    "sorry",
    "specifically",
    "specified",
    "specify",
    "specifying",
    "still",
    "stop",
    "strongly",
    "sub",
    "substantially",
    "successfully",
    "such",
    "sufficiently",
    "suggest",
    "sup",
    "sure",
    "t",
    "take",
    "taken",
    "taking",
    "tell",
    "tends",
    "th",
    "than",
    "thank",
    "thanks",
    "thanx",
    "that",
    "that'll",
    "thats",
    "that've",
    "the",
    "their",
    "theirs",
    "them",
    "themselves",
    "then",
    "thence",
    "there",
    "thereafter",
    "thereby",
    "thered",
    "therefore",
    "therein",
    "there'll",
    "thereof",
    "therere",
    "theres",
    "thereto",
    "thereupon",
    "there've",
    "these",
    "they",
    "theyd",
    "they'll",
    "theyre",
    "they've",
    "think",
    "this",
    "those",
    "thou",
    "though",
    "thoughh",
    "thousand",
    "throug",
    "through",
    "throughout",
    "thru",
    "thus",
    "til",
    "tip",
    "to",
    "together",
    "too",
    "took",
    "toward",
    "towards",
    "tried",
    "tries",
    "truly",
    "try",
    "trying",
    "ts",
    "twice",
    "two",
    "u",
    "un",
    "under",
    "unfortunately",
    "unless",
    "unlike",
    "unlikely",
    "until",
    "unto",
    "up",
    "upon",
    "ups",
    "us",
    "use",
    "used",
    "useful",
    "usefully",
    "usefulness",
    "uses",
    "using",
    "usually",
    "v",
    "value",
    "various",
    "'ve",
    "very",
    "via",
    "viz",
    "vol",
    "vols",
    "vs",
    "w",
    "want",
    "wants",
    "was",
    "wasnt",
    "way",
    "we",
    "wed",
    "welcome",
    "we'll",
    "went",
    "were",
    "werent",
    "we've",
    "what",
    "whatever",
    "what'll",
    "whats",
    "when",
    "whence",
    "whenever",
    "where",
    "whereafter",
    "whereas",
    "whereby",
    "wherein",
    "wheres",
    "whereupon",
    "wherever",
    "whether",
    "which",
    "while",
    "whim",
    "whither",
    "who",
    "whod",
    "whoever",
    "whole",
    "who'll",
    "whom",
    "whomever",
    "whos",
    "whose",
    "why",
    "widely",
    "willing",
    "wish",
    "with",
    "within",
    "without",
    "wont",
    "words",
    "world",
    "would",
    "wouldnt",
    "www",
    "x",
    "y",
    "yes",
    "yet",
    "you",
    "youd",
    "you'll",
    "your",
    "youre",
    "yours",
    "yourself",
    "yourselves",
    "you've",
    "z",
    "zero"
];

let sbut = document.querySelector("#sbut");
tdim = {};
let mkeyWord = {};
let mFileSystem = {
    files: new Array(),
    setkeywords() {},
    set dir(filesys) {
        let oldfiles = {};
        let newfiles = {};
        for (let i = 0; i < this.files.length; i++) {
            oldfiles[this.files[i].name] = this.files[i];
        }
        for (let i = 0; i < filesys.length; i++) {
            newfiles[filesys[i].name] = filesys[i];
        }
        let ob = { ...oldfiles, ...newfiles };
        this.files = [...Object.values(ob)];
        console.log(this.files);
    }
};

let icon = document.getElementsByClassName("icon")[0];
let sidebar = document.getElementsByClassName("sidebar")[0];
sidebar.addEventListener("transitionend", (e) => {
    if (sidebar.classList.contains("expand")) {
        let sideopt = document.getElementsByClassName("sideopt")[0];
        sideopt.classList.add("optvisible");
    }
});
sidebar.addEventListener("transitionstart", () => {
    let sideopt = document.getElementsByClassName("sideopt")[0];
    sideopt.classList.remove("optvisible");
});
const handleSidebar = () => {
    let icon = document.getElementsByClassName("icon")[0];
    icon.classList.toggle("checked");
    let sidebar = document.getElementsByClassName("sidebar")[0];
    sidebar.classList.toggle("expand");
};
icon.addEventListener("click", handleSidebar, false);

function openTab(a, id) {
    let y = document.getElementsByClassName("headopt");
    [...y].forEach((i) => i.classList.remove("active"));
    a.classList.add("active");
    let x = document.getElementsByClassName("mainbody");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}
function openWindow(a, id) {
    let y = document.getElementsByClassName("option");
    [...y].forEach((i) => i.classList.remove("active"));
    a.classList.add("active");
    let x = document.getElementsByClassName("mainWindow");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(id).style.display = "block";
    let icon = document.getElementsByClassName("icon")[0];
    icon.classList.toggle("checked");
    let sidebar = document.getElementsByClassName("sidebar")[0];
    sidebar.classList.toggle("expand");
}

// drag and drop functionality start
const dropArea = document.querySelector(".drag-area"),
    headerText = dropArea.querySelector(".drag-area .heading"),
    smallheaderText = dropArea.querySelector(".drag-area .heading.small"),
    button = dropArea.querySelector("button"),
    dragContainer = document.querySelector(".drag-container"),
    input = dropArea.querySelector("input");
let file, files; //this is a global variable and we'll use it inside multiple functions
button.onclick = (e) => {
    input.click();
    e.stopPropagation();
    //if user click on the button then the input also clicked
};
input.addEventListener("change", function () {
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = this.files[0];
    files = this.files;
    dropArea.classList.add("active");
    (async () => {
        try {
            await readFiles();
        } catch (e) {
            console.log(e);
        }
    })();
    //calling function
});
//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event) => {
    event.preventDefault(); //preventing from default behaviour
    dropArea.classList.add("active");
    headerText.textContent = "Release to Upload File";
    smallheaderText.textContent = "Release";
});
//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("active");
    headerText.textContent = "Drag & Drop to Upload File";
    smallheaderText.textContent = "Drag & Drop";
});
//If user drop File on DropArea
dropArea.addEventListener("drop", (event) => {
    event.preventDefault(); //preventing from default behaviour
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = event.dataTransfer.files[0];
    files = event.dataTransfer.files;
    headerText.textContent = "Drag & Drop to Upload File";
    smallheaderText.textContent = "Drag & Drop";
    (async () => {
        await readFiles();
    })();
    //calling function
});

function readFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (res) => {
            resolve(res.target.result);
        };
        reader.onerror = (err) => reject(err);

        reader.readAsText(file);
    });
}

async function readFiles() {
    let datadir = new Array();
    for (i = 0; i < files.length; i++) {
        const file = files[i];
        let fileType = file.type; //getting selected file type
        let validExtensions = ["text/plain"]; //adding some valid image extensions in array
        if (validExtensions.includes(fileType)) {
            //if user selected file is an image file
            const contents = await readFile(file);
            datadir.push({ name: file.name, content: contents });
            // console.log(contents);
        } else {
            alert("This is not a Text File!");
            dropArea.classList.remove("active");
            dragText.textContent = "Drag & Drop to Upload File";
        }
    }
    mFileSystem.dir = datadir;
    dragContainer.style.display = "none";
    showFiles();
}
function showFiles() {
    const { files } = mFileSystem;
    const filesys = document.querySelector(".filesys");
    filesys.innerHTML = "";
    console.log(filesys);
    for (let i = 0; i < files.length; i++) {
        console.log(files[i]);
        const d = document.createElement("div");
        d.innerText = files[i].name;
        filesys.append(d);
    }
}
function DisplayDrag() {
    document.querySelector(".drag-container").style.display = "block";
}
dragContainer.addEventListener("click", (e) => {
    e.target.style.display = "none";
});
// drag and drop functionality end

// search functionality start
function buildTDIM() {
    let { files } = mFileSystem;
    zobj = (() => {
        x = {};
        for (let i = 0; i < files.length; i++) {
            x[files[i].name] = 0;
        }
        return x;
    })();
    for (let i = 0; i < files.length; i++) {
        let k = files[i].content
            .replaceAll(".", " ")
            .replaceAll(",", " ")
            .replaceAll('"', " ")
            .replaceAll("(", " ")
            .replaceAll(")", " ")
            .split(" ");
        let key = files[i].name;
        console.log(k);
        // console.log({ k, key });
        for (let j = 0; j < k.length; j++) {
            let word = k[j].toLowerCase();
            // console.log(k[j], j);
            let tdiv = Object.assign({}, zobj);
            let v = stopWords.includes(word);
            if (v) {
                continue;
            }
            if (typeof tdim[word] == "undefined") {
                tdim[word] = tdiv;
            }
            tdim[word][key] = 1;
        }
    }
    console.log(tdim, "tdim");
}
let search = (e) => {
    // match.length = 0;
    buildTDIM();
    query = document.querySelector("#search").value;
    if (query != "" || query != " ") {
        console.log(parseQuery(query));
        // for (let i = 0; i < files.length; i++) {
        //     if (files[i]["content"].includes(query)) {
        //         match.push(files[i]);
        //     }
        // }
        showFilesFromVector(parseQuery(query));
    }
};
document.body.addEventListener("keydown", (e) => {
    if (e.key == "Enter" && e.target.tagName == "INPUT") {
        search(e);
    }
});
sbut.addEventListener("click", search);
function parseQuery(qString) {
    let { files } = mFileSystem;
    let tags = qString.toLowerCase().split(" ");
    zobj = (() => {
        let { files } = mFileSystem;
        x = {};
        for (let i = 0; i < files.length; i++) {
            x[files[i].name] = 0;
        }
        return x;
    })();
    let finalvector = Object.assign({}, zobj);

    for (let j = 0; j < files.length; j++) {
        let q = "";
        let file = files[j].name;
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].toLowerCase() === "and") {
                q = q + " &";
            } else if (tags[i].toLowerCase() === "or") {
                q = q + " |";
            } else if (tags[i].toLowerCase() === "not") {
                q = q + " !";
            } else {
                let val;
                if (typeof tdim[tags[i]] === "undefined") {
                    val = 0;
                } else {
                    val = tdim[tags[i]][file];
                }
                console.log(val);
                q = q + val;
            }
        }
        console.log(q);
        finalvector[file] = eval(q);
    }
    console.log(finalvector);
    return finalvector;
}
function showFilesFromVector(vector) {
    // console.log();
    // if([...Object.values(vector)].reduce((a, b) => a + b, 0)==0){alert("nofiles")};
    const filesys = document.querySelector(".displayresult");
    console.log(vector, "boo");
    filesys.innerHTML = "";
    console.log(filesys);
    for (name in vector) {
        // console.log(files[i]);
        if (vector[name]) {
            const d = document.createElement("div");
            d.innerText = name;
            filesys.append(d);
        }
    }
}

// search functionality end

// mFileSystem.dir = [
//     {
//         name: "cpp.txt",
//         content:
//             'cpp is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Oracle, and IBM, so it is available on many platforms.'
//     },
//     {
//         name: "java.txt",
//         content:
//             "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages. As of 2019, Java was one of the most popular programming languages in use according to GitHub, particularly for client-server web applications, with a reported 9 million developers."
//     },
//     {
//         name: "python.txt",
//         content:
//             "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects."
//     }
// ];
// showFiles();
// openWindow(document.querySelectorAll(".side")[2], "Viz");
// handleSidebar();
// openTab(document.querySelectorAll(".headopt")[1], "viz");
