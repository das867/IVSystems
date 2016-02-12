/*Add FOREIGN KEY references to lineitem table*/
ALTER TABLE lineitem ADD FOREIGN KEY (comic_id) REFERENCES comic(isbn);
ALTER TABLE lineitem ADD FOREIGN KEY (apparel_id) REFERENCES apparel(isbn);
ALTER TABLE lineitem ADD FOREIGN KEY (game_id) REFERENCES game(isbn);
ALTER TABLE lineitem ADD FOREIGN KEY (figure_id) REFERENCES figure(isbn);
ALTER TABLE lineitem ADD FOREIGN KEY (trade_id) REFERENCES trade(isbn);

/*add FOREIGN KEY to each item for Brand*/
ALTER TABLE apparel MODIFY brand int(10) unsigned;
ALTER TABLE game MODIFY brand int(10) unsigned;
ALTER TABLE comic MODIFY brand int(10) unsigned;
ALTER TABLE trade MODIFY brand int(10) unsigned;
ALTER TABLE figure MODIFY brand int(10) unsigned;

ALTER TABLE apparel ADD FOREIGN KEY (brand) REFERENCES brand(id);
ALTER TABLE game ADD FOREIGN KEY (brand) REFERENCES brand(id);
ALTER TABLE comic ADD FOREIGN KEY (brand) REFERENCES brand(id);
ALTER TABLE trade ADD FOREIGN KEY (brand) REFERENCES brand(id);
ALTER TABLE figure ADD FOREIGN KEY (brand) REFERENCES brand(id);

/*add FOREIGN KEY to lineitem relating to order*/
ALTER TABLE lineitem MODIFY order_id int(10) unsigned;
ALTER TABLE lineitem ADD FOREIGN KEY (order_id) REFERENCES orders(id);

/*Add FOREIGN KEY to subscriber_box_comic and subscription_box*/
ALTER TABLE subscriber_box_comic MODIFY box_id int(10) unsigned;
ALTER TABLE subscriber_box_comic ADD FOREIGN KEY (box_id) REFERENCES subscription_box(id);
ALTER TABLE subscriber_box_comic ADD FOREIGN KEY (comic_id) REFERENCES comic(isbn);
ALTER TABLE subscription_box MODIFY subscriber int(10) unsigned;
ALTER TABLE subscription_box ADD FOREIGN KEY (subscriber) REFERENCES member(id);

/*Add FOREIGN KEY to Tagged Items*/
ALTER TABLE tagged_game ADD FOREIGN KEY (tag) REFERENCES itemtag(name);
ALTER TABLE tagged_comic ADD FOREIGN KEY (tag) REFERENCES itemtag(name);
ALTER TABLE tagged_trade ADD FOREIGN KEY (tag) REFERENCES itemtag(name);
ALTER TABLE tagged_apparel ADD FOREIGN KEY (tag) REFERENCES itemtag(name);
ALTER TABLE tagged_figure ADD FOREIGN KEY (tag) REFERENCES itemtag(name);

ALTER TABLE tagged_game ADD FOREIGN KEY (item) REFERENCES game(isbn);
ALTER TABLE tagged_comic ADD FOREIGN KEY (item) REFERENCES comic(isbn);
ALTER TABLE tagged_trade ADD FOREIGN KEY (item) REFERENCES trade(isbn);
ALTER TABLE tagged_apparel ADD FOREIGN KEY (item) REFERENCES apparel(isbn);
ALTER TABLE tagged_figure ADD FOREIGN KEY (item) REFERENCES figure(isbn);

/*Add FOREIGN KEY to CollectedComic*/
ALTER TABLE collectedcomic ADD FOREIGN KEY (comic) REFERENCES comic(isbn);
ALTER TABLE collectedcomic ADD FOREIGN KEY (trade) REFERENCES trade(isbn);

/*Add FOREIGN KEY to TradeWriter TradeIllustrator ComicWriter ComicIllustrator*/
ALTER TABLE tradewriter ADD FOREIGN KEY (trade) REFERENCES trade(isbn);
ALTER TABLE comicwriter ADD FOREIGN KEY (comic) REFERENCES comic(isbn);
ALTER TABLE tradeillustrator ADD FOREIGN KEY (trade) REFERENCES trade(isbn);
ALTER TABLE comicillustrator ADD FOREIGN KEY (comic) REFERENCES comic(isbn);
ALTER TABLE tradewriter MODIFY writer int(10) unsigned;
ALTER TABLE comicwriter MODIFY writer int(10) unsigned;
ALTER TABLE tradeillustrator MODIFY illustrator int(10) unsigned;
ALTER TABLE comicillustrator MODIFY illustrator int(10) unsigned;
ALTER TABLE tradeillustrator ADD FOREIGN KEY (illustrator) REFERENCES illustrator(id);
ALTER TABLE comicillustrator ADD FOREIGN KEY (illustrator) REFERENCES illustrator(id);
