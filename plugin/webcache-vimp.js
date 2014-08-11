var INFO = xml`
<plugin name="webcache-vimp.js"
        version="0.1"
        summary="Open webcached page"
        href="http://github.com/naoty/webcache-vimp"
        xmlns="http://vimperator.org/namespaces/liberator">

        <author email="naoty.k@gmail.com">Naoto Kaneko</author>
        <license href="http://opensource.org/licenses/mit-license.php">MIT</license>
        <project name="Vimperator" minVersion="3.3"/>
        <p>Open webcached page</p>
        <item>
            <tags>:webcache</tags>
            <spec>:webcache</spec>
            <description>
                <p>Open webcached page</p>
            </description>
        </item>
</plugin>`;

(function () {
    var names = ["webcache"];
    var desc = "Open webcached page";
    var command = function (args) {
        var location = content.document.location;
        var newURL = "http://webcache.googleusercontent.com/search?q=cache:" + location;
        liberator.open(newURL, liberator.NEW_TAB);
    };

    commands.addUserCommand(names, desc, command);
})();
