from models import DeletedPage

DELETED_PAGES = (
    DeletedPage(redirect_to="/map-problem-to-circuits", old_slug="build/index"),
    DeletedPage(redirect_to="/execute-on-hardware", old_slug="run/index"),
    DeletedPage(redirect_to="", old_slug="start/index"),
)
