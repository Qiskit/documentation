from models import DeletedPage

DELETED_PAGES = (
    DeletedPage(old_slug="build/index", redirect_to="/map-problem-to-circuits"),
    DeletedPage(old_slug="run/index", redirect_to="/execute-on-hardware"),
    DeletedPage(old_slug="start/index", redirect_to=""),
)
