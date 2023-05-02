module Jekyll
  module PostFilter
    def published_post(posts)
      now = DateTime.now
      today = DateTime.new(now.year, now.month, now.day, 0, 0, 0, now.zone)

	  posts.select do |post|
		post_date = DateTime.parse(post.date)
		post_date <= today
	  end
    end
  end
end

Liquid::Template.register_filter(Jekyll::PostFilter)